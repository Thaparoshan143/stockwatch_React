import { useParams } from 'react-router-dom'

const ScriptPage : React.FC = () => {
    const script = useParams();

  return (
    <div className="min-h-[100vh] flex flex-col justify-evenly items-center w-[100%] bg-[#948a9f] text-white">
        <div className=" ">
            <div className="bg-theme-alt rounded-lg p-8">
                <h1 className="text-2xl">Script Name : {script.id}</h1>
            </div>
        </div>
    </div>
  )
}

export default ScriptPage