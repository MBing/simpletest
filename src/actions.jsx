
/* ACTION TYPES */
export const SHOW_ALL_MESSAGES = 'SHOW_ALL_MESSAGES';
export const ACTIVE_MESSAGE = 'ACTIVE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';


/* ACTION CREATORS */
export function deleteMessage (id, messages) {
    return {
        type: DELETE_MESSAGE,
        id,
        messages
    }
};

export function activeMessage (id) {
    return {
        type: ACTIVE_MESSAGE,
        id
    }
};

export function showAllMessages (messages) {
    return {
        type: SHOW_ALL_MESSAGES,
        messages
    }
};