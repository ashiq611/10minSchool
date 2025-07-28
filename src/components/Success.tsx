
import TestimonialCard from '../components/TestimonialCard';

function Success() {
  return (
    <div className="carousel carousel-center bg-neutral rounded-box max-w-md space-x-4 p-4">
      <div className="carousel-item">
        <TestimonialCard
          name="Junaed Bin Samad"
          score="8.5"
          videoUrl="#"
          imageSrc="/images/junaed.jpg" 
        />
      </div>
      <div className="carousel-item">
        <TestimonialCard
          name="Shah Mohammad Rafi"
          score="8.0"
          videoUrl="#"
          imageSrc="/images/rafi.jpg" 
        />
      </div>
      <div className="carousel-item">
        <img
          src="https://img.daisyui.com/images/stock/photo-1601004890684-d8cbf643f5f2.webp"
          className="rounded-box"
        />
      </div>
    </div>
  );
}

export default Success;
