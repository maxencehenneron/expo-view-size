import ExpoModulesCore

class ExpoViewSizeView: ExpoView {
  private let uiManager: RCTUIManager?
  
  private lazy var label = {
    let label = UILabel()
    return label
  }()
  
  required init(appContext: AppContext? = nil) {
    self.uiManager = appContext?.reactBridge?.uiManager

    super.init(appContext: appContext)
    
    addSubview(label)
  }
  
  func setTitle(_ title: String) {
    label.text = title
    label.sizeToFit()
    
    updateShadowLayout()
  }
  
  private func updateShadowLayout() {
    let width = label.frame.size.width
    let height = label.frame.size.height
    
    RCTExecuteOnUIManagerQueue {
      let shadow = self.uiManager?.shadowView(forReactTag: self.reactTag)
      if let ygnode = shadow?.yogaNode {
        YGNodeStyleSetWidth(ygnode, Float(width))
        YGNodeStyleSetHeight(ygnode, Float(height))
        self.uiManager?.setNeedsLayout()
      }
    }
  }
}
