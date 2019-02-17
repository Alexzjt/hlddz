import React, {Component} from 'react';
import './App.css';
import {Badge, Input, Button,message} from 'antd';

const Search = Input.Search;

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            remainPoke: [],
            inputPoke: ""
        }
    }

    init() {
        this.setState({
            remainPoke: [0, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 1, 1],
            inputPoke: ""
        });
    }

    submit(value) {
        let tempString = JSON.stringify(this.state.remainPoke);
        let array = JSON.parse(tempString);

        while (/10/g.test(value)) {
            value.replace(/10/, "");
            array[10] -= 1;
        }

        value.toLowerCase().split("").forEach(poke => {
            switch (poke) {
                case "d":
                    array[15] -= 1;
                    break;
                case "x":
                    array[14] -= 1;
                    break;
                case "k":
                    array[13] -= 1;
                    break;
                case "q":
                    array[12] -= 1;
                    break;
                case "j":
                    array[11] -= 1;
                    break;
                case "a":
                    array[1] -= 1;
                    break;
                default:
                    array[poke] -= 1;
            }
        });

        if (array.some(d=>d<0)){
            message.error("你的输入有误，已重置系统");
            this.init();
            return;
        }
        this.setState({
            remainPoke: array,
            inputPoke: ""
        });
    }

    componentWillMount() {
        this.init();
    }

    render() {
        return (
            <div className="App">
                <img src={require('./ddz-logo.jpg')} id={'logo'}/>
                <div className="my-content">
                    <Badge count={this.state.remainPoke[15]}>
                        <a href="#" className="head-example"/>
                        <span className="poke" style={{color: '#ff9800'}}>王</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[14]}>
                        <a href="#" className="head-example"/>
                        <span className="poke" style={{color: 'lightslategrey'}}>王</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[2]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">2</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[1]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">A</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[13]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">K</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[12]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">Q</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[11]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">J</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[10]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">10</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[9]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">9</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[8]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">8</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[7]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">7</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[6]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">6</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[5]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">5</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[4]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">4</span>
                    </Badge>
                    <Badge count={this.state.remainPoke[3]}>
                        <a href="#" className="head-example"/>
                        <span className="poke">3</span>
                    </Badge>
                    <br/><br/>
                    <div>
                        <Search
                            style={{float: 'left', width: '90%'}}
                            placeholder="输入手牌或对家打出的牌，d代表大王，x代表小王，不区分大小写"
                            enterButton="记录"
                            size="large"
                            onSearch={value => this.submit(value)}
                            onPressEnter={value => this.submit(value)}
                            allowClear
                        />
                        <Button type="danger" style={{float: 'right'}} size={'large'}
                                onClick={() => this.init()}>重置</Button>
                        <br style={{clear: 'both'}}/>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
