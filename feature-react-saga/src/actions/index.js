export const LOAD_IMAGES = 'LOAD_IMAGES';
export const HIDE_IMAGES = 'HIDE_IMAGES';

export function loadImages(isLoadImages) {
  const actionType = isLoadImages ? HIDE_IMAGES : LOAD_IMAGES
    return {
      type: actionType,
    }
  }