const CatalogCreateDish = (props) => {
    if (!props.isOpen) {
        return null;
      }
    
      return (
        <div className="dialog">
          <div className="dialog-content">
            <button onClick={props.onClose}>Đóng</button>
            {props.children}
          </div>
        </div>
      );
}

export default CatalogCreateDish