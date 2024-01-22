import PropTypes from 'prop-types'


const Header = ({titleP1, titleP2, onAdd}) => {

    return (
        <header className='header'>
            <h1>{titleP1}<span className='title-pt2'>{titleP2}</span></h1>
        </header>
    )
}

Header.defaultProps = {
    titleP1: 'CV',
    titleP2: 'Builer'
  }
  
Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

export default Header