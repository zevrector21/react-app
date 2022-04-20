import React, {Component} from 'react';

import {Typography,Tree,Icon,Divider,notification,Button,Anchor} from 'antd';
import { Link } from 'react-router-dom';
import PageLayout from "../PageLayout";
const { Title,Text } = Typography;



const DirectoryTree = Tree.DirectoryTree;
const { TreeNode } = Tree;

const paths = {
  0:{
      name:"",
      child:{
          0:{name:"public",
          child:{
              0:"favicon.ico",
              1:"index.html",
              2:"manifest.json",
          }},
          1:{name:"src",
              child:{
                0:{
                    name:"components",
                    child:{
                        0:{
                            name:"pages",
                            child:{
                                0:"GettingStarted.js",
                                1:"HomePage.js",
                                2:"NoPageFound.js",
                            }
                        },
                        1:"ConnectedIntlProvide.js",
                        2:"NavBar.js",
                        3:"TopNavBar.js",
                    }
                },
                1:{
                    name:"config",
                    child:{
                        0:"supportedLanguages.js"
                    }
                },
                2:{
                    name:"locales",
                    child:{
                        0:{
                            name:"en-US",
                            child:{
                                0:"home.js",
                                1:"nav.js",
                            }
                        },
                        1:{
                            name:"tr-TR",
                            child:{
                                0:"home.js",
                                1:"nav.js"
                            }
                        },
                        2:"en-US.js",
                        3:"tr-TR.js",
                    }
                },
                3:{
                    name:"redux",
                    child:{
                        0:{
                            name:"actions",
                            child:{
                                0:"env-actions.js",
                                1:"home-actions.js",
                            }
                        },
                        1:{
                            name:"reducers",
                            child:{
                                0:"envReducer.js",
                                1:"homeReducer.js",
                                2:"rootReducer.js",
                            }
                        },
                        2:"store.js",
                    }
                },
                4:"App.css",
                5:"App.js",
                6:"App.test.js",
                7:"index.css",
                8:"index.js",
                9:"logo.svg",
                10:"Routes.js",
                11:"serviceWorker.js",
              }},
          2:".gitignore",
          3:"config-overrides.js",
          4:"package.json",
          5:"package-lock.json",
          6:"README.md",
      }
  }
};

const openNotification = (url,fileName,isFolder) => {
    const key = `open${Date.now()}`;
    const btn = (
        <Button type="primary" size="small" onClick={() => {notification.close(key);window.open(url,'_blank');}}>
            Open
        </Button>
    );
    notification.open({
        message: <Typography>{`Open `}<Text mark>{`${fileName}`}</Text> {`${isFolder?"Folder":"File"} on Github?`}<Icon type="github" style={{paddingLeft:"10px"}}/></Typography>,
        description: `A new tab will open with ${url}`,
        btn,
        key,
    });
};

function GettingStarted(props) {

    const Content = () => (
        <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>

            <Title level={2}>Getting Started Guideline<Link to="#getting-started-guideline" id={"getting-started-guideline"}> #</Link></Title>
            <Text>
                This guideline shows what operations can be done and how to done.
                Before we start, let's look what is our folder structure:
            </Text>

            <Divider/>

            <Title level={4}>Second Part<Link to="#second-part" id={"second-part"}> #</Link></Title>
            <p>Lorem Ipsum</p><br/>
            <p>Lorem Ipsum</p><br/>
        </div>
    );

    return (
        <PageLayout content={<Content/>} />
    );
}

export default GettingStarted;