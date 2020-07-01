import {
    DOC_POST_DOC,
    DOC_GET_CATEGORIES_DOC,
    DOC_GET_SUBJECTS,
    DOC_GET_SEMESTERS,
    DOC_POST_LIKE_DOC,
    DOC_POST_COMMENT_DOC,
    DOC_GET_TOP_DOC,
    DOC_GET_DOC_BY_ID,
} from "../constant/index.js"

export function docPostDoc(doc) {
    return {
        type: DOC_POST_DOC,
        payload: doc,
    }
}

export function docGetCategoriesDoc(categories) {
    return {
        type: DOC_GET_CATEGORIES_DOC,
        payload: categories,
    }
}

export function docGetSemesters(semesters) {
    return {
        type: DOC_GET_SEMESTERS,
        payload: semesters,
    }
}

export function docGetSubjects(subjects) {
    return {
        type: DOC_GET_SUBJECTS,
        payload: subjects,
    }
}

export function docPostLikeDoc(idPost, idUser, idWriter) {
    return {
        type: DOC_POST_LIKE_DOC,
        payload: {
            idPost, idUser, idWriter
        }
    }
}



export function docGetTopDoc(page) {
    return {
        type: DOC_GET_TOP_DOC,
        payload: page
    }
}

export function docGetDocByID(idPost) {
    return {
        type: DOC_GET_DOC_BY_ID,
        payload: idPost
    }
}