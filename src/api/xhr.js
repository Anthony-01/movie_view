export function xhr(config) {
    let {data = null, url, method = "", headers, responseType = 'json', timeout, CancelToken, withCredentials,xsrfCookieName,
      xsrfHeaderName, onDownLoadProgress, onUpLoadProgress, auth, validateStatus} = config;
  
    return new Promise((resolve, reject) => {
      let xhr = new XMLHttpRequest();
  
      xhr.open( method.toUpperCase(), url, true);
  
      configureRequest();
  
      addEvent();
  
      //processHeaders();
  
      xhr.send( data );
  
      function handleResponse(res) {
        if (!validateStatus || validateStatus(res.status)) {
          resolve(res);
        } else {
          reject( createError(`Request failed with status code ${res.status}`, config, null, xhr, res));
        }
      }
  
      function configureRequest() {
        if (responseType) {
          xhr.responseType = responseType;
        }
        if (withCredentials) {
          xhr.withCredentials = withCredentials;
        }
        if (timeout) {
          xhr.timeout = timeout;
        }
      }
  
      function addEvent() {
        xhr.onreadystatechange = function handleLoad() {
          if (xhr.readyState !== 4) {
            // reject(null);
            return;
          }
          if (xhr.status === 0) {
              return
          }
        //   let responseHeader = parseHeader(xhr.getAllResponseHeaders());
          let responseData = responseType === 'text' ? xhr.responseText : xhr.response;
          let obj = {
            data: responseData,
            status: xhr.status,
            statusText: xhr.statusText,
            config,
            request: xhr
          };
          resolve(obj)
  
        };
        xhr.onerror = function handleError() {
          throw createError('Network Error', config, null, xhr);
        };
        xhr.ontimeout = function handleTimeout() {
          throw createError(`Failed with timeout ${timeout} ms exceeded`, config, 'ECONNABORTED', xhr);
        };
        if (onDownLoadProgress) {
          xhr.onprogress = onDownLoadProgress;
        }
        if (onUpLoadProgress) {
          xhr.upload.onprogress = onUpLoadProgress;
        }
      }
    })
  
  }
  