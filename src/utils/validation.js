import { TITLE_MAX_LENGTH } from '../constants'

export const titleRules = {
    required: 'Title is required.',
    validate: (value) => value.trim() !== '' || 'Title is required.',
    maxLength: {
        value: TITLE_MAX_LENGTH,
        message: `Title must be ${TITLE_MAX_LENGTH} characters or less.`,
    },
}