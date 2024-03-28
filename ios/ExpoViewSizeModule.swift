import ExpoModulesCore

public class ExpoViewSizeModule: Module {
  public func definition() -> ModuleDefinition {
    View(ExpoViewSizeView.self) {
      Prop("title") { (view: ExpoViewSizeView, prop: String) in
        view.setTitle(prop)
      }
    }
  }
}
