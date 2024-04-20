import './PhotoModal.css';
import '../../index.css';
import { PropTypes } from "prop-types";

const PhotoModal = ({photo, onClose }) => {
  return (
    <div className="modal fixed z-1 pt-24 top-0 left-0 w-full h-full overflow-auto bg-black">
      <span className="close text-3xl no-underline absolute cursor-pointer text-gray-200 hover:text-gray-100 focus:text-gray-100 top-3.5 right-9 font-bold" onClick={onClose}>
       X
      </span>
      <p className="title text-lg m-auto block w-4/5 text-center py-2.5 px-0 h-16 md:max-w-3xl text-gray-200 font-medium font-sans italic">Title: {photo.title}</p>
      <img className="w-full modal-content m-auto block md:max-w-3xl" src={photo.url} alt={photo.title} />
    </div>
  )
}

PhotoModal.propTypes = {
  photo: PropTypes.object,
  onClose: PropTypes.func
}

export default PhotoModal;
