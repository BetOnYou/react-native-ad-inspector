#import "AdInspector.h"
#import <GoogleMobileAds/GoogleMobileAds.h>
#import <UIKit/UIApplication.h>


@implementation AdInspector

- (dispatch_queue_t)methodQueue
{
  return dispatch_get_main_queue();
}

RCT_EXPORT_MODULE()

RCT_EXPORT_METHOD(open)
{
  UIViewController *viewController = [UIApplication sharedApplication].delegate.window.rootViewController;
  [GADMobileAds.sharedInstance presentAdInspectorFromViewController:viewController
                             completionHandler:^(NSError *error) {
      NSLog(@"AdInspector Error: %@", error);
  }];
}

@end
