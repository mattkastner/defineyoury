import React from 'react';
import { Link, withRouter } from 'react-router-dom'

function Header(props) {
    return (
        <div>
            {
                props.location.pathname.includes('share') ?
                <ul>
                    <Link to={{ pathname= '/share' }}><li>Culture</li></Link>
                    <Link to={{ pathname= '/products/share' }}><li>Products</li></Link>
                </ul>
                :
                <ul>
                    <Link to={{ pathname= '/culture' }}><li>Culture</li></Link>
                    <Link to={{ pathname= '/products' }}><li>Products</li></Link>
                    <Link to={{ pathname= '/business' }}><li>Business</li></Link>
                    <Link to={{ pathname= '/training' }}><li>Training</li></Link>
                </ul>
            }
        </div>
    );
}

export default withRouter(Header);