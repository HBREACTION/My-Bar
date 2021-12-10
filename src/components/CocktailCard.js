import React from 'react';


const CocktailCard = ({ cocktail }) => {

    return (
        <>


            <section className="main-card--cointainer">
                {

                    cocktail.map((newCock) => {
                        const {id,name,description,image,}= newCock;
                        return (
                            <>

                
                                <div className="card-container" key={id}>
                                    <div className="card">
                                        <div className="card-body">
                                            <span className="card-number card-circle subtle">{id}</span>
                                            <span className="card-author subtle">{name}</span>
                                            <h1 className="card-title ">{name}</h1>
                                            <span className="card-description subtle">Something something about cocoktail.{description}
                                            </span>
                                            <div className="card-read">Read</div>
                                        </div>
                                        {<img src={image} alt="images" className="card-media" />}
                                        <span className="card-tag subtle">Want it Now </span>

                                    </div>
                                </div>
                                </>)
                    })}


                            

                            </section>
        </>
            );
};

            export default CocktailCard;
