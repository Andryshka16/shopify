interface ImageContainerProps {
	height: number
	width: number
	image: string
}

const ImageContainer = ({ height, width, image }: ImageContainerProps) => (
	<div
		className={`flex items-center justify-center`}
		style={{ minWidth: width + 'px', minHeight: height + 'px' }}
	>
		<img src={image} style={{ maxWidth: width + 'px', maxHeight: height + 'px' }} alt='' />
	</div>
)

export default ImageContainer
