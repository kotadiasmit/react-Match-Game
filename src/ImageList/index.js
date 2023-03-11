import './index.css'

const ImageList = props => {
  const {imageDetails, thumbnailClicked} = props
  const {thumbnailUrl, id} = imageDetails

  const onThumbnailClick = () => {
    thumbnailClicked(id)
  }

  return (
    <li className="img-container">
      <button type="button" className="btn" onClick={onThumbnailClick}>
        <img src={thumbnailUrl} className="thumbnail-img" alt="thumbnail" />
      </button>
    </li>
  )
}
export default ImageList
