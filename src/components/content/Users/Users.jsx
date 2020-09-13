import React from 'react';
import s from './Users.module.css';
import UserPhoto from '../../../assets/img/UserPhoto.png'
import { NavLink } from 'react-router-dom';

    let Users=(props)=>{
        let pagesCount = Math.ceil(props.totalUserCount / props.pageSize)

        let pages=[];
        for(let i=1;i<=pagesCount;i++){
            pages.push(i)
        }
        
        
        return <div>
            <div>
                {pages.map(p => {
                    return <span
                        className={props.currentPage === p && s.selectedPage}
                        onClick={() => { props.onPageChanged(p) }
                        }>
                            {p}
                        </span>
                })}
            </div>
            {
                props.Users.map(u =>
                    <div key={u.id}>
                        <span>
                            <NavLink to={'/profile/'+u.id}>
                                <div>
                                    <img src={u.photos.small != null ? u.photos.small : UserPhoto} className={s.img} />
                                </div>
                            </NavLink>
                            
                            <div>
                                {
                                    u.followed
                                        ? <button disabled={props.btnToggle.some(id=>id===u.id)} onClick={() =>{
                                             props.unfollow(u.id)
                                        }
                                        }>Unfallow</button>


                                        : <button disabled={props.btnToggle.some(id=>id===u.id)} onClick={() => {
                                            props.follow(u.id)
                                        }
                                        }>Fallow</button>
                                }
                            </div>
                        </span>
                        <span>
                            <div>
                                <div>{u.name}</div>
                                <div>{u.status}</div>
                            </div>
                            <div>
                                <div>{'u.location.country'}</div>
                                <div>{'u.location.city'}</div>
                            </div>
                        </span>
                    </div>
                )
            }
        </div>
    }
export default Users;
// 