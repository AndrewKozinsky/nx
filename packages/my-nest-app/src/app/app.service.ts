import { Injectable } from '@nestjs/common'
import { article } from '@myorg/my-lib'

@Injectable()
export class AppService {
	getData() {
		return { message: 'Hello API' }
	}
}
