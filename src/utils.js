import React from 'react';

export function traverseLayout(componentTree) {
    console.log('&***', componentTree);
    var Component = componentTree.component;
    const layout = componentTree.layout;
    return (
        <div>
            <Component
                styles={{...layout}}
            >
            {
                componentTree.value
            }
            </Component>
            <div>
                {
                    !componentTree.children ? null : componentTree.children.map(function(child) {
                        return traverseLayout(child);
                    })
                }
             </div>
        </div>
    )
}
