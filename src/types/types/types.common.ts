import {ReadingStatus} from "@/types/enums/enums.common";

export type AppSecrets = {
    secret: string
    [key: string]: string
}
export type LiteralSecrets = {
    token: string
    createdOn: Date
    expiresOn: Date
}
export type Auth = {
    app: AppSecrets,
    literal: LiteralSecrets
}
export type BookAuthor = {
    name: string
}
export type LiteralBook = {
    id: string,
    slug: string,
    title: string,
    description?: string | null
    cover: string
    authors?: BookAuthor[]
}
export type LiteralReadingState = {
    book: LiteralBook,
    status: ReadingStatus,
}