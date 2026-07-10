import hello from './hello.module.css'

const Hello = () => {
  return (
    <div>
        <h1 className="heda">Hello Everyone from Hello Component</h1>
        {/* how to use a module css file in react */}
        <h1 className={ "text-center " + hello.heda}>Hello Everyone from Hello Component</h1>
    </div>
  )
}

export default Hello
