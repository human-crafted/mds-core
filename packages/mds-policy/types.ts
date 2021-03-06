/*
    Copyright 2019 City of Los Angeles.

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
 */

import { ApiRequest, ApiVersionedResponse, ApiClaims } from '@mds-core/mds-api-server'
import { Policy } from '@mds-core/mds-types'

export const POLICY_API_SUPPORTED_VERSIONS = ['0.4.1'] as const
export type POLICY_API_SUPPORTED_VERSION = typeof POLICY_API_SUPPORTED_VERSIONS[number]
export const [POLICY_API_DEFAULT_VERSION] = POLICY_API_SUPPORTED_VERSIONS

export type PolicyApiRequest = ApiRequest

export type PolicyApiAccessTokenScopes = 'policies:read'

export type PolicyApiResponse<TBody = {}> = ApiVersionedResponse<
  POLICY_API_SUPPORTED_VERSION,
  ApiClaims<PolicyApiAccessTokenScopes>,
  TBody
>

export type GetPolicyResponse = PolicyApiResponse<{ data: { policy: Policy } }>
export type GetPoliciesResponse = PolicyApiResponse<{ data: { policies: Policy[] } }>
