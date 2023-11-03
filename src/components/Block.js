import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import styles from './component-style.css'


function Block(props) {

    const [showFullText, setShowFullText] = useState(false);

    const toggleShowFullText = () => {
        setShowFullText(!showFullText);
    };

    return (
        <Card>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>

                <div className='block-conent-wrapper'>

                    <Card.Text className="describe">         {showFullText ? (
                        <div dangerouslySetInnerHTML={{ __html: props.desc }} />
                    ) : (
                        <>

                            {props.desc.slice(0, 200)}{props.desc.length > 200 && '... '}

                            <a className='read-more' onClick={toggleShowFullText}>Read more</a>
                        </>

                    )}
                        <hr />
                        <ul>
                            <li key={props.repo}><Card.Link href={props.repo} target="_blank">Check out repository</Card.Link><br /></li>
                            <li key={props.play}>
                                {!props.play.includes("youtube") ? (
                                    <Card.Link href={props.play} target="_blank">Try it yourself!</Card.Link>
                                ) : <Card.Link href={props.play} target="_blank">See how it works!</Card.Link>}
                            </li>
                        </ul>
                    </Card.Text>

                    <Card.Img src={props.gif} variant="top" />

                </div>



                <Card.Footer>
                    {props.tags.map((element, index) => (
                        <i >{element}</i>
                    ))}

                </Card.Footer>

            </Card.Body >
        </Card >


    );
}

export default Block;