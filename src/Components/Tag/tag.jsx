import PropTypes from 'prop-types'

function Tag({text}) {
    return (
        <div className="tag">
            {text}
        </div>
    )
}

Tag.propTypes ={
    text: PropTypes.string,
}

export default Tag
