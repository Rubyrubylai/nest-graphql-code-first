import { Field, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CommentInput {
	@Field(type => Int)
	id: number;

	@Field()
	content: string;
}
