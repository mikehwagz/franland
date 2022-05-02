import { h } from 'hyposcript'
import Media from './Media'
import BlockContent from './BlockContent'
import { projectContent } from '../lib/serializers'

export default function ProjectCarousels({ data }) {
  return (
    <div class="px-15 m:px-25" data-component="bgScroll">
      {data.projects.map(project => (
        <div
          class="w-full max-w-[98.4rem] mx-auto mt-30 mb-145"
          data-component="projectCarousel"
          data-color={project?.backgroundColor ?? '#FAEEE6'}
        >
          <div class="relative pt-[66%] overflow-hidden cursor-grab active:cursor-grabbing js-carousel">
            <div class="absolute h-full inset-0 flex">
              {project.modules.map(module => {
                if (module._type === 'richText') {
                  return (
                    <div
                      class="relative overflow-y-auto pt-[66%] min-w-full"
                      style={{
                        boxShadow: 'inset 0 0 0 0.2rem #2F3336',
                      }}
                    >
                      <div class="absolute inset-0 p-15 m:p-60 after:block after:h-15 m:after:h-60">
                        <BlockContent
                          blocks={module.content}
                          serializers={projectContent}
                        />
                      </div>
                    </div>
                  )
                } else {
                  return (
                    <Media
                      media={module}
                      className="pt-[66%] min-w-full"
                      padding={false}
                    />
                  )
                }
              })}
            </div>
          </div>
          <div class="flex justify-between items-center font-serif text-20 m:text-25 leading-100 mt-15">
            <div class="flex gap-x-20">
              <div>
                <span class="js-current">1</span>/{project.modules.length}
              </div>
              <h2>{project.title}</h2>
            </div>
            <div class="hidden m:flex gap-x-40">
              <button class="w-30 js-prev">
                <svg viewBox="0 0 30 26" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.3721 12.9979C29.3721 13.5502 28.9244 13.9979 28.3721 13.9979L1.00015 13.9979C0.447865 13.9979 0.000148773 13.5502 0.000148773 12.9979C0.000148773 12.4456 0.447865 11.9979 1.00015 11.9979L28.3721 11.9979C28.9244 11.9979 29.3721 12.4456 29.3721 12.9979Z"
                    class="fill-current"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.294696 12.2908C-0.0958319 12.6813 -0.0958366 13.3145 0.294684 13.705L12.2924 25.7029C12.6829 26.0935 13.3161 26.0935 13.7066 25.703C14.0971 25.3124 14.0971 24.6793 13.7066 24.2887L1.70891 12.2908C1.31839 11.9003 0.685224 11.9003 0.294696 12.2908Z"
                    class="fill-current"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.294696 13.705C-0.0958319 13.3145 -0.0958366 12.6814 0.294684 12.2908L12.2924 0.292908C12.6829 -0.09762 13.3161 -0.0976257 13.7066 0.292895C14.0971 0.683416 14.0971 1.31658 13.7066 1.70711L1.70891 13.705C1.31839 14.0956 0.685224 14.0956 0.294696 13.705Z"
                    class="fill-current"
                  />
                </svg>
              </button>
              <button class="w-30 js-next">
                <svg viewBox="0 0 30 26" fill="none">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M0.236328 12.998C0.236328 12.4457 0.684043 11.998 1.23633 11.998L28.6082 11.998C29.1605 11.998 29.6082 12.4457 29.6082 12.998C29.6082 13.5502 29.1605 13.998 28.6082 13.998L1.23633 13.998C0.684043 13.998 0.236328 13.5502 0.236328 12.998Z"
                    class="fill-current"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.3137 13.705C29.7042 13.3145 29.7042 12.6814 29.3137 12.2908L17.316 0.292908C16.9255 -0.0976198 16.2923 -0.0976256 15.9018 0.292895C15.5113 0.683416 15.5113 1.31658 15.9018 1.70711L27.8995 13.705C28.29 14.0956 28.9232 14.0956 29.3137 13.705Z"
                    class="fill-current"
                  />
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M29.3137 12.2908C29.7042 12.6813 29.7042 13.3145 29.3137 13.705L17.316 25.7029C16.9255 26.0935 16.2923 26.0935 15.9018 25.703C15.5113 25.3124 15.5113 24.6793 15.9018 24.2887L27.8995 12.2908C28.29 11.9003 28.9232 11.9003 29.3137 12.2908Z"
                    class="fill-current"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}
