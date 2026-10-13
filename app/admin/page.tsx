import {headers} from 'next/headers';
import {requireChatGPTUser} from '../chatgpt-auth';
import {authorize} from '../../server/cms';
import Admin from './panel';
export const dynamic='force-dynamic';
export default async function Page(){await requireChatGPTUser('/admin');try{await authorize(new Request('https://internal/admin',{headers:await headers()}));}catch{return <div style={{padding:80}}>Този акаунт няма администраторски достъп.</div>;}return <Admin/>}
