import React, { createContext, PureComponent } from 'react';
export const UserContext = createContext();

export default class UserProvider extends PureComponent {

	state = {
		loggedIn: false,
		nim: undefined,
		nama: undefined,
		fakultas: undefined,
		jurusan: undefined,
		prodi:undefined,
		level:0,
		setLoggedIn: () => {
			this.state.loggedIn = true;
			this.forceUpdate();
		},
		checkLogin : async ()=>{
			if(localStorage.user){
				const user = JSON.parse(localStorage.user);
				this.state.loggedIn=true;
				this.setState({nama:user.nama});
				this.setState({nim:user.nim});
				this.setState({fakultas:user.fakultas});
				this.setState({jurusan:user.jurusan});
				this.setState({prodi:user.prodi});
				this.forceUpdate();
			}
			else {
				this.state.loggedIn=false;
			}
		},
		setLevel: (level) =>{
			this.setState({level:level});
			this.forceUpdate();
		}

		
	}

	render() {
		return (
			<UserContext.Provider value={this.state}>
				{this.props.children}
			</UserContext.Provider>
		);
	}
}