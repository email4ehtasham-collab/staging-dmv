
const GoogleMap = () => {
    return (
		<div style={{ width: "100%", height: "450px" }}>
			<iframe
				title="DMV General Contracting Group Location"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99313.74809071071!2d-77.1842347604153!3d38.93415603512909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x158dd0ef2148a11%3A0xceda33050d2dcdfb!2sDMV%20General%20Contracting%20Group%2C%20LLC.!5e0!3m2!1sen!2s!4v1776439134922!5m2!1sen!2s"
				width="100%"
				height="100%"
				style={{ border: 0 }}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>
		</div>
	);
};

export default GoogleMap;
