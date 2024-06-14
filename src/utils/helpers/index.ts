export const calculateTagPosition = (
  imageWidth,
  imageHeight,
  tagX,
  tagY,
  viewportWidth,
) => {
  const maxTagWidth = viewportWidth * 0.2; // Set the maximum width of the tag to 20% of the viewport width
  const tagAspectRatio = 1; // Set the aspect ratio of the tag to 1:1
  let tagWidth = maxTagWidth;
  let tagHeight = tagWidth * tagAspectRatio;
  // Calculate the scaling factor to fit the tag inside the image
  const scaleFactor = Math.min(imageWidth / tagWidth, imageHeight / tagHeight);
  tagWidth *= scaleFactor;
  tagHeight *= scaleFactor;
  // Calculate the position of the tag
  const tagLeft = ((tagX - tagWidth / 2) / imageWidth) * 10 + "%";
  const tagTop = ((tagY - tagHeight / 2) / imageHeight) * 10 + "%";
  return { tagLeft, tagTop, tagWidth, tagHeight };
};
export const calculateModalPosition = (
  tagX,
  tagY,
  viewportWidth,
  viewportHeight,
) => {
  // Set the maximum width of the modal to 80% of the viewport width
  const maxModalWidth = viewportWidth * 0.8;
  // Set the maximum height of the modal to 80% of the viewport height
  const maxModalHeight = viewportHeight * 0.8;
  // Calculate the modal's width and height based on the aspect ratio of the image
  const aspectRatio = 1; // Set the aspect ratio of the image to 1:1
  let modalWidth = maxModalWidth;
  let modalHeight = modalWidth * aspectRatio;
  // If the modal's height is greater than the maxModalHeight, adjust the width and height
  if (modalHeight > maxModalHeight) {
    modalHeight = maxModalHeight;
    modalWidth = modalHeight / aspectRatio - 100;
  }
  // Calculate the position of the modal
  // const modalLeft = (tagX - modalWidth / 2) / viewportWidth *100 +"%" ;
  const modalLeft = tagX / viewportWidth;
  const modalTop = (tagY - modalHeight / 2) / viewportHeight;
  return { modalLeft, modalTop, modalWidth, modalHeight };
};
