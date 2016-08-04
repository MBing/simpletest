
/* ACTION TYPES */
export const ACTIVE_MESSAGE = 'ACTIVE_MESSAGE';
export const DELETE_MESSAGE = 'DELETE_MESSAGE';
export const READ_MESSAGE = 'READ_MESSAGE';

/* ACTION CREATORS */
export function deleteMessage (id, messages) {
    return {
        type: DELETE_MESSAGE,
        id,
        messages
    }
}
export function readMessage (id) {
    return {
        type: READ_MESSAGE,
        readMessages: []
    }
}
export function activeMessage (id) {
    return {
        type: ACTIVE_MESSAGE,
        id
    }
}

