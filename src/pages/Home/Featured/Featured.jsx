import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import featuredImg from '../../../assets/home/featured.jpg'
const Featured = () => {
    return (
        <div className="bg-fixed" style={{backgroundImage: `url(${featuredImg})`,objectFit: "cover"}}>
            <div className="bg-black/50 h-full py-10 text-white">
           
            <SectionTitle 
            heading={'Featured Items'}
            subHeading={'Check it out'}
            ></SectionTitle>
            <div className="md:flex justify-center items-center px-16 py-24 gap-10 ">

                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div>
                    <p>Aug 20,2023</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda facere vitae perspiciatis ab ratione qui non adipisci repellat, consectetur est, blanditiis quaerat impedit error, quibusdam eligendi iusto deserunt! Fugit quam magnam id, voluptas tempora esse quibusdam nam mollitia dolores, pariatur animi laboriosam in odio maiores asperiores temporibus impedit aut excepturi.</p>
                    <button className="btn btn-outline border-t-0 border-r-0 border-l-0 text-white">Order Now</button>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Featured;