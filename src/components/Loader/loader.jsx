import { Dna } from "react-loader-spinner";

const Loader = ({ load }) => {
    return (
        <>
            {load &&
                <div className="main-loader">
                    <div className="loader">
                        <div className="loader-div">
                            <Dna
                                visible={load}
                                height="100"
                                width="100"
                                ariaLabel="dna-loading"
                                wrapperStyle={{}}
                                wrapperClass="dna-wrapper"
                            />
                        </div>
                    </div>
                </div>
            }
        </>
    )
}

export default Loader;