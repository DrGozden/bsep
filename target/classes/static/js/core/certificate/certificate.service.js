'use strict';

angular.module('core.certificate')
	.service('CertificateService', function($http) {
		this.selfSign = (data) => {
			return $http.post('/api/certificates/self-signed', data);
		};
		this.sign = (data) => {
			return $http.post('/api/certificates/signed', data);
		};
	});
