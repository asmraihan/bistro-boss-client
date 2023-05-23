
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-4/12 mx-auto text-center my-8">
            <h4 className="text-yellow-600 italic">---{subHeading}---</h4>
            <h3 className="text-3xl uppercase border-y-4 py-4 border-yellow-500/50">{heading}</h3>
        </div>
    );
};

export default SectionTitle;