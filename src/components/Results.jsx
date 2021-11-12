import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { ConatinerResult, ResultHeader, ResultDetails, ResultDescription } from '../elements/ResultElements';
import AddList from './AddList';

const Results = ({result, genres, loadResult}) => {
    return (
        <ConatinerResult>
            {
                loadResult && (
                <div>
                    <ResultHeader>
                        <img src={result.attributes.posterImage.small} alt="" />
                        <ResultDetails>
                            <h1>{result.attributes.canonicalTitle}</h1>
                            <label>Episodes: {result.attributes.episodeCount ? result.attributes.episodeCount : result.attributes.chapterCount }</label>
                            <ul>
                                <li>Type: {result.type}</li>
                                <li>Staus: {result.attributes.status}</li>
                                <li>Subtype: {result.attributes.subtype}</li>
                            </ul>
                            <label>Genres: {
                                genres.map( genre => (
                                    <Fragment key={genre.id}>
                                        { genre.attributes.name }   |
                                    </Fragment>
                                ))
                            }</label>
                            
                        </ResultDetails>
                    </ResultHeader>
                    <AddList />
                    <ResultDescription>
                        {result.attributes.description}
                    </ResultDescription>
                    
                </div>)
            }
            
        </ConatinerResult>
    )
}

const mapStateToProps = state => ({
    result: state.result,
    genres: state.genres
})

const mapDispatchToProps = dispatch => ({})

export default connect(mapStateToProps, mapDispatchToProps)(Results)
