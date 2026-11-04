import { Metadata } from "next";
import styled, { createGlobalStyle } from "styled-components";
import NavitemActive from "@/components/Common/NavitemActive";

import PageData from "./pageData";
import { Suspense } from "react";

import StarsIcon from '@/assets/stars.svg';

const GlobalStyles = createGlobalStyle`
    .modal-video {
        width: 100%;
        height: calc(100vh - 55px);
    }

    .modal-fullscreen .modal-content {
        background-color: black;
        border: none;
    }

    .modal-header .btn-close {
        filter: invert(1);
    }
`;

const StyledCom = styled.div`
    .banner-holder {
        // min-height: 400px;
        min-height: 250px;
        max-height: 100%;
        height: 100%;
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;

        .image-holder {
            min-height: 400px;
            max-height: 100%;
            height: 100%;
            position: absolute;
            top: 0;
            left: 0;
        }

        .content-data {
            position: relative;
            z-index: 1;
            text-align: center;
            display: grid;
            align-content: center;

            h1 {
                font-size: 48px;
                margin-top: 20px;
                position: relative;
                font-weight: 800;
                text-align: center;
                color: white;
				// text-shadow: 0px 0px 10px rgba(0, 0, 0, 1);
            }

            h1::after {
                content: "";
                position: absolute;
                height: calc(100% + 10px);
                width: calc(100% + 40px);
                background: var(--primary-color);
                bottom: -5px;
                left: 50%;
                transform: translateX(-50%);
                z-index: -1;
				border-radius: 10px;
            }

            .sub-title {
                background: var(--primary-color);
                color: #ffffff;
                font-size: 18px;
                letter-spacing: 2px;
                padding: 2px 10px;
                font-weight: 700;
                margin-bottom: 20px;
            }

            @media (max-width: 1024px) {
                h1 {
                    font-size: 32px;
                }
            }

            @media (max-width: 768px) {
                min-height: 250px;

                .image-holder {
                    min-height: 250px;
                }
            }
        }
    }

`;

export const metadata: Metadata = {
  title: "Client Reviews & Testimonials | DMV General Contracting Group Bethesda MD",
  description: "See what homeowners say about DMV General Contracting Group. Read verified reviews from satisfied clients across Maryland, Virginia & DC. 4.9★ rated on Google with 97+ reviews.",

    alternates: {
      canonical: `/testimonials`,
    },
};


export default function TestimonialsPage() {
    return (
        <div className="page-wrapper">
            <NavitemActive nav="testimonials" />
            <GlobalStyles />
            <StyledCom>
                <div className="banner-holder">
                    <div className="container">
                        <div className="content-data">
                            <div className="h-list justify-content-center">
                                <h1>Client Testimonials</h1>
                            </div>
                            <h4 className="color-white mt-3">Real Stories. Real Impact.</h4>
                            <p className="font-weight-600 mt-3">
                                Hear directly from our clients how DMV General Contracting Group has transformed their homes and lives.
                            </p>
                        </div>
                    </div>
                </div>
                <Suspense fallback={null}>
                    <PageData />
                </Suspense>
                <section className='section pb-0'>
					<div className='container'>
						<div className='h-list justify-content-between flex-lg-nowrap mb-4 ' data-gap="0" data-gap-lg="40">
							<div className='grid' data-gap="10">
								<h3 className='section-title'>
                                    <div className={'stars-icon'}>
                                        <StarsIcon />
                                    </div>      
                                    Featured in the News
                                </h3>
								<p>One of our kitchen remodels gained wide attention for its design and quality — take a look at what makes it stand out.</p>
							</div>
						</div>
						<div className='image-holder'>
							<img src='./images/article.jpg' alt='Featured news article about a DMV General Contracting Group kitchen remodel' />
						</div>
					</div>
				</section>
            </StyledCom>
        </div>
    );
}
