/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum QuestionType {
    SHORT_ANSWER = "SHORT_ANSWER",
    PARAGRAPH = "PARAGRAPH",
    CHECKBOX = "CHECKBOX",
    MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
    DROPDOWN = "DROPDOWN"
}

export class CreateQuestionnaireInput {
    userId: string;
    title: string;
    questions?: Nullable<Nullable<QuestionInput>[]>;
}

export class QuestionInput {
    title: string;
    questionType: QuestionType;
    order: number;
}

export class UpdateQuestionnaireInput {
    id: string;
    title?: Nullable<string>;
    questions?: Nullable<Nullable<QuestionInput>[]>;
}

export class CreateResponseInput {
    exampleField?: Nullable<number>;
}

export class UpdateResponseInput {
    id: number;
}

export class CreateUserInput {
    email: string;
    name?: Nullable<string>;
}

export class UpdateUserInput {
    id: string;
    email?: Nullable<string>;
    name?: Nullable<string>;
}

export class Questionnaire {
    id: string;
    title: string;
    version?: Nullable<number>;
    questions: Nullable<Question>[];
    responses?: Nullable<Nullable<Response>[]>;
    userId?: Nullable<string>;
}

export class Question {
    id: string;
    order: number;
    title: string;
    questionType: QuestionType;
}

export abstract class IQuery {
    abstract getQuestionnaireFromLink(link: string): Nullable<JSONObject> | Promise<Nullable<JSONObject>>;

    abstract questionnaires(userId: string): Nullable<Nullable<Questionnaire>[]> | Promise<Nullable<Nullable<Questionnaire>[]>>;

    abstract questionnaire(id: string, returnType?: Nullable<string>): Nullable<Questionnaire> | Promise<Nullable<Questionnaire>>;

    abstract responses(): Nullable<Response>[] | Promise<Nullable<Response>[]>;

    abstract response(id: number): Nullable<Response> | Promise<Nullable<Response>>;

    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createQuestionnaire(createQuestionnaireInput: CreateQuestionnaireInput): Questionnaire | Promise<Questionnaire>;

    abstract updateQuestionnaire(updateQuestionnaireInput: UpdateQuestionnaireInput): Questionnaire | Promise<Questionnaire>;

    abstract removeQuestionnaire(id: string): Nullable<Questionnaire> | Promise<Nullable<Questionnaire>>;

    abstract createResponse(createResponseInput: CreateResponseInput): Response | Promise<Response>;

    abstract updateResponse(updateResponseInput: UpdateResponseInput): Response | Promise<Response>;

    abstract removeResponse(id: number): Nullable<Response> | Promise<Nullable<Response>>;

    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export class Response {
    exampleField?: Nullable<number>;
}

export class User {
    id: string;
    name: string;
    email: string;
}

export type JSONObject = any;
type Nullable<T> = T | null;
