import { useState } from 'react';
import '../../index.css'
import PhotoModal from '../PhotoModal/PhotoModal';
import { PropTypes } from "prop-types";

const PhotoCard = ({photo}) => {
  const [isOpen, setIsOpen] = useState(false)
  const showModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen(false)

  // TODO: Add key listener to close modal with ESC

  return (
    <>
    <div className="max-w-sm rounded overflow-hidden">
      <img className="w-full h-72 object-cover" onClick={showModal} src={photo.url} alt={photo.title}/>
    </div>
    {isOpen && (
        <PhotoModal
          photo={photo}
          onClose={closeModal}
        />
      )}
    </>
  )
}

PhotoCard.propTypes = {
  photo:PropTypes.object
}

export default PhotoCard;
