import { NativeAuthClientConfig } from '@terradharitri/sdk-native-auth-client/lib/src/entities/native.auth.client.config';

export class NativeAuthSignerConfig extends NativeAuthClientConfig {
  signerPrivateKey?: string = undefined;
}
