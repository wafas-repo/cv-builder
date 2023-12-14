import PropTypes from 'prop-types'


const Header = ({title, onAdd}) => {

    return (
        <header className='header'>
            <h1>{title}</h1>
        </header>
    )
}

Header.defaultProps = {
    title: 'CV Builder',
  }
  
Header.protoTypes = {
    title: PropTypes.string.isRequired,
}

export default Header