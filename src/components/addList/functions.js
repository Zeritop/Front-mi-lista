import { toast } from 'react-toastify';
import { API } from '../../entorno';

const handleList = async (e, tkn, idResult, title, urlImg, typeList, description, lists, list, addToList, getListByUser, deleteFromList, updateToList, username) => {
    const { name } = e.target;
    if(!localStorage.getItem('tk')){
        return toast.warning('Inicia sesión para esta acción')
    }else{
        console.log(lists)
        const inArray = lists.map(l => l.lista?.idList).includes(idResult);
        console.log(inArray)
        const findInList = lists.filter(l => l.lista?.idList === idResult)
        console.log(findInList)
        let favourite = false;
        let seen = false;
        switch(name){
            case 'lista':
                if(!inArray){
                    try{
                        const res = await addToList(idResult, description, title, urlImg, typeList, favourite, seen, tkn.id);
                        await getListByUser(tkn.username, API)
                        list.setBoolean(true);
                        toast.success(res.data.message)
                    }catch(error){
                        return toast.error(error.response.data.message)
                    }
                }else{
                    try{
                        const res = await deleteFromList(username, findInList[0]._id, tkn.username)
                        await getListByUser(tkn.username, API)
                        list.setBoolean(false);
                        toast.success(res.data.message);
                    }catch(error){
                        return toast.error(error.response.data.message)
                    }
                }
                break;
            case 'favoritos':
                if(!inArray){
                    try{
                        favourite = true;
                        
                        const res = await addToList(idResult, description, title, urlImg, typeList, favourite, seen, tkn.id);
                        await getListByUser(tkn.username, API)
                        list.setBoolean(true);
                        toast.success(res.data.message)
                    }catch(error){
                        return toast.error(error.response.data.message)
                        
                    }
                }else{
                    try{
                        const res = await updateToList(username, findInList[0].lista._id, !findInList[0].favourite, seen, tkn.username)
                        await getListByUser(tkn.username, API)
                        // list.setBoolean(true)
                        toast.success(res.data.message)
                    }catch(error){
                        return toast.error(error.response.data.message)
                    }
                }
                break;
            case 'vistos':
                if(!inArray){
                    try{
                        
                        seen = true;
                        const res = await addToList(idResult, description, title, urlImg, typeList, favourite, seen, tkn.id);
                        await getListByUser(tkn.username, API)
                        list.setBoolean(true);
                        toast.success(res.data.message)
                    }catch(error){
                        return toast.error(error.response.data.message)
                        
                    }
                }else{
                    try{
                        const res = await updateToList(username, findInList[0].lista._id, favourite, !findInList[0].seen, tkn.username)
                        await getListByUser(tkn.username, API)
                        // list.setBoolean(true)
                        toast.success(res.data.message)
                    }catch(error){
                        return toast.error(error.response.data.message)
                    }
                }
                break;        
            default:
                break;        
        }

    }
}

export{
    handleList
}