import React from 'react';

const Wrapper = ({ left, right }) => {
    return (
        <section className="py-5">
            <div className="container">
                <div className="row">
                    <div className="col-5">
                        {left}
                    </div>
                    <div className="col">
                        {right}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Wrapper;