import PropTypes from 'prop-types';

const Blog = ({ blog }) => {
    console.log(blog);
    return (
        <div>
            
        </div>
    );
};

// prop types use
Blog.propTypes = {
    blog: PropTypes.object.isRequired
}
export default Blog;