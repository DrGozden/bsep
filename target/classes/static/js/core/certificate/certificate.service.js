'use strict';

angular.module('core.certificate')
	.service('CertificateService', function($http) {
		this.selfSign = (data) => {
			return $http.post('/api/certificates/self-signed', data);
		};
		this.sign = (data) => {
			return $http.post('/api/certificates/signed', data);
		};
		this.revoke = (store, id) => {
			return $http.put(`/api/certificates/revoke/store/${store}/cert/${id}`);
		}
	});

