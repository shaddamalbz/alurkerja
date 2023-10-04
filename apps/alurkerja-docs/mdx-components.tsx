import type { MDXComponents } from 'mdx/types'
import _ from 'lodash'

export const useMDXComponents: (components: MDXComponents) => MDXComponents = (components) => {
  return {
    h2: (props) => (
      <h2
        id={_.toLower(props.children?.toString())
          .replaceAll(' ', '-')
          .replaceAll('()', '')}
        className="group relative z-20 text-2xl font-bold text-gray-900 before:invisible before:-mt-20 before:block before:h-20 before:content-['']"
        {...props}
      >
        {props.children}
      </h2>
    ),
    h3: (props) => (
      <h3
        id={_.toLower(props.children?.toString())
          .replaceAll(' ', '-')
          .replaceAll('()', '')}
        className="group relative z-10 text-2xl font-bold text-gray-900 before:invisible before:-mt-20 before:block before:h-20 before:content-[''] "
        {...props}
      >
        {props.children}
      </h3>
    ),
    ...components,
  }
}
