import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';
import { drawerReducer } from './reducers/drawer';
import { AuthedUser } from './reducers/userAuthed';
import { ProductReducer } from './reducers/productReducer';
// import { AuthedUser } from './reducer/authedUser';
// import { Projects } from './reducer/projects';
// import { Channels } from './reducer/channels';
// import { SelectedProject } from './reducer/selectedProject';
// import { ChannelData } from './reducer/channelData';
// import { ProjectUsers } from './reducer/projectUsers';
// import { Invite } from './reducer/invitations';
// import { Package } from './reducer/packages';
// import { Payment } from './reducer/payments';
// import { Users } from './reducer/users';
// import { Notifications } from './reducer/notifications';
// import { Forget } from './reducer/forget';

export const ConfigureStore = () => {
    const store = createStore(combineReducers({
            drawerReducer,
            authedUser: AuthedUser,
            productReducer: ProductReducer
            // projects: Projects,
            // channels: Channels,
            // selectedProject: SelectedProject,
            // channelData: ChannelData,
            // projectUsers: ProjectUsers,
            // invited: Invite,
            // packages: Package,
            // payments: Payment,
            // users: Users,
            // notifications: Notifications,
            // forget: Forget
        }), applyMiddleware(thunk));
    return store;
}