
import React,{Component} from 'react';
import config from './config';
import styles from './Greeter.css';

class Greeter extends Component{
    render() {
        return {
            <div className={styles.root}>
                {config.greetText}
            </div>
        }
    }
}
extends default Greeter