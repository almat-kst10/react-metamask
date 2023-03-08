import 'components/scss/BaseButton.scss'

const BaseButton = (props: any) => {
    return (
        <div className="button" onClick={e => props.onClick()}>
            {props.children}
        </div>
    )
}

export default BaseButton