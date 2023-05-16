import React from "react";

export default function MessageShow({ conversationsData ,scrollRef }: any) {
  return (
    <>
      {conversationsData?.map((item: any) => {      
        return (
          <div
            className={`${
              item?.sender === "user"
                ? "col-start-1 col-end-8"
                : "col-start-6 col-end-13 "
            } p-3 rounded-lg w-[300px]`}
          >
            <div
              className={`flex  ${
                item?.sender === "user"
                  ? "flex-row"
                  : "justify-start flex-row-reverse"
              } items-center`}
            >
              <div className="flex items-center justify-center h-10 w-10 rounded-full bg-indigo-500 flex-shrink-0">
                <img
                  src={`${
                    item?.sender === "user"
                      ? "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7Kv4Ky_-aGET3Mg0JDzBUqmBpAEXQgcXZEA&usqp=CAU"
                      : "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMSEhARExAVEhUVEBYWEBAVFRAVGBMTFRcXFhYYGBYYHSggGBolGxUXITEhJSktMC4uGB8zODMtNygtLisBCgoKDg0OGxAQGy0lHyYtLi0vKy0tLS0tLS0tLS0tLS0tKy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tKy0tLf/AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAgMBAQEAAAAAAAAAAAAABQYDBAcCAQj/xABBEAACAQIBBwgIAwcEAwAAAAAAAQIDEQQFBhIhMUFRIjJhcYGRobEHEyMzUmJywUJz0UOCkrLC4fAUNFNjosPx/8QAGgEBAQADAQEAAAAAAAAAAAAAAAQBAwUCBv/EADIRAAIBAgMDCwQDAQEAAAAAAAABAgMRBCExEkFRBRMiMmFxkaGx0fAzgcHhI0LxghT/2gAMAwEAAhEDEQA/AO0AAAAAAAAAAAAAFCz69IEcM5YfDWnXWqpUeuFHot+KfRsW/gAW3LOW8PhI6detGmnzYvXKX0wWuXYjn2WPSy9ccLh+qpWf/ri/6uw5ti8VUrTdSpOVScts5Ntv+3Qe6WCb2u3izEpKOp6jCUtETWOz7yhVvfFSgvhpqFO3U4rS8SKqZaxMtuLrvrrVn/Ue44OK6T1UoxSfJWxmp147jesLPe0YYZZxMdmKrrqrVl/USmCz4yhStbFzkluqKNS/bNN+JCaK4HlwR5WIjwPTwc1o0dHyR6WZqyxOHUlvqUXZ/wAEnZ/xI6DkPOHDYyN6FaM2lyoc2ceuD1rr2H52dMYevOnKM4SlCcXeM4txafQ0bozjLRk86codZH6dBzrMb0iKs44fFtRqOyp19SjUe6M1sjJ8dj6NV+ino8AAAAAAAAAAAAAAAAAAAAAAAAAAAFM9JWdTwdFUqUrV6yejLfSp7JT69y6bvccVpU3J+Lb82Sud2VXisZiKt7p1HCl+XB6MLddr9cmeKFLRVu99JrqT2UbqNLnH2H2jRUdnaz2beAydVrvRpU3Nra1sXXJ6kTEcysU1+zXQ5v7RaI3LPM6K2YqyK4eavNl1Mnq+aWLj+yU/pnB+DaZHYjI2ISknh6ux/s5+djF0ZTRAgmcNmvip/sdFcZuMfC9/AlKGYtR8+vCPRGMpedjU5RW82bSKkGrltxOY1RJuFaM38MouF+27KtiKEqcpQnFxlF2lF7j1GWd0zDtJWNWUTsfouzqeJpvC1pXq0o3hN7alJatb3yjqT4pp8TkUlc2cg5TlhcRRxC/Z1E5Jb4bJrti2i+lU21nqczEUebeWjP0iD5GSaTTumrp8U9h9NpOAAAAAAAAAAAAAAAAAAAAADHiItxmo6pOLUW/ia1eJkCAPzTh8NKFTQmrShdST4x1duveSmEw7qThTjtnJRXW3Ylc5aejUqR4V6i7pMz5i4fTxSl/x05S7dUF/N4Eld2kdDDq1O/azoGT8FCjTjSgrRiu972+LZsgEQBixfMl2eaMpixfMl2eaMPQytSOABqNoK1nvklVKXr4rl01yvmp7+7b3llPkopppq6as1xT2mU7ZnpM4ye6GCnVmoU4uTk1FcLydld7EbGU8J6mrVpfBNpfTti+5olszffR/NpfzF+HfTRrxS/ib7juGTMO6dGjSlLSlClCEpfE4xUW+2xsiQLjlgAAAAAAAAAAAAAAAAAAAAAAAHGc9f9zX/Pn5kn6OKevEy6KcV26TfkiKzzmnia9mn7eexp7ya9HHMxP1Q8pEWJ1f2L6H0S4gWFiQyDFi+ZLs80ZTFi+ZLs80YehlakcADUbQD7YWF0ZOfZ/4bRrwqf8AJT1/VB2fg4mDM330fzaX8xM+kSn7OhLhUkv4o3/pIbM+SVaN2l7Wlt1fiLcI7yRrxH0X9vU71IAHROYAAAAAAAAAAAAAAAAAAAAADnWfOdcpU8RRoPRgoSjOqts9zUXuW1X2svGWqzhh681tVKbT4Oz1nGsp+5q/Qz1FHmTKlS1ONuKsT+RJ4mpUWHoVZU3UfK0ZSgrRTbcmtdkrkDS50fqXmXXMaSWNjf8AHRqRi/mVpPwTJ6krbs7FFOLcW75XRYaGY1Ky9dXrVpb3p6K7FrfiZ45lYePMnXg+MarX2LICHnZ8TfzceBXZZFxVJXw+OnK2yniFGopdGna8SGnn1KGnRxGGcakZaMtCStdPg/1ZeypZJw6q4nH4yycdONGjK21w0Yzkv4Ur9ZmMk4tzV/L0MNNNbL/JX6/pAT5FLDSc21GKm1znqStG7fUStPJWMrK+IxkqV17nDqMdHo9Y7tmLPDDqE8JjNFexrx9c7fs5NK742f8AMWc1zlFRTgrX+/r8zNsYttqT0+xXJZmUJc+piKnTOq39jDVzGoW9nVrUnuanfwtfxLSDyq1Rf2Z65qHA5HnDHE0J/wCnrVpVIq06blKUlJO6UlpXa3qxGbdqLnnxQlWxdGnTg5yjh9KSir2Tm0r8P7lUxuHdOcoS1Si7SXB2Ta8ToUJqVss7ElWDjHXK+h0r0f51SpUaFKq9KkrxjLfTWk0uuK4bls2WOoJnCMie4p/vfzM7FmtWc8Jh29uho9kW4rwSKmiVEqADB6AAAAAAAAAAAAAAAAAAMWJoKpCdOWycHF9UlY4znHg50Y16U1aUYtda3NdDO1kXnDkKljKU6dRWbg1CqudBvY1xV9z1GUzDVz8/ZHV8Rhk1dPEUk1xTqROr5YyAo06c8JTjCrRq+tpx3T1WnBt8Ul3FYyXmNKlj40qlZP1Uo1Vowa9ZoaM0ld6vHYzpBFiZbMkU0VeLILAZ1YefJqT/ANPUXOo1uQ0+t6mS3+upW0vXU7fFpwt33PWIw0Jq04RmuEoxl5mrHIuGTusLRT4+qpfoTdE3LaIvH5cddvDYJ+snLVUxK106EXtlpbJStsS3krQwUKFCNGCtGEUlxevW30t3fabkIKKskkuCSS7keMXzJdnmjE5ZWWh6is7kTiaEakJU5rSjKLjJcU9TK9gspvBtYbFNqC1YfFu+jOH4Yzf4Zpauzvsx5lFNWaut6es0xlZWehtabd0YI4+k1pKtTa+JThbvuR2OzowtPUqqqz/DSpe0lJ8OTqXabc8jYaTu8NRb4ulT/Q2MPhKdPmU4Q+mMY+SC2O3yRh7W63myKzcwdTSrYqvHRq12rU9vqqUebHr3vs6Sg50f7vE/mv7HWiByh6NKmJqTxEcRGmqj0tCUJNrdtT2PaV4Se1Ub7PYnxEbQXeV3NuhKpTowhHSlJtRjxek/A7Vk3CKjSp0k76EEr8Xvfa7sjc1826WCpQhG05qNp1mrOTbu7K70Y69i4a7k2dK5FYAAwZAAAAAAAAAAAAAAAAAAAAAK1nfgpxdLGUly6L5a40737ld36JPgbMcZCvCFam9UlaS3xktsX0k4VTKOb9WjKVbBvU9dTDPY/p/Tat3A8VYbcNk9QlsyubwInCZdpyehUTozWqUZ6lfr3dtiVi7607rc0cycJQdpItjJSWR9MWL5kuzzRlM1fJlSUWklrtvXEwoSknZGdpLVkGDZxeBnSs5pK+zWmaxpaadmrG5NNXQAEYttJK7b1IwCTyDQvNzeyK1db/tcsBr5Pw3q4KO/bJ8WzYOxQp7EEnqc2rPbk2gADcawAAAAAAAAAAAAAAAAAAAAAAAAAACMyzkqnWWlKCk0td9tuh7UVp5AcNdCvOl8r1r/ADruXWtG8ZLjFrwKzhsTbVLsZHiJunJWevh4MoowU1nu8Sg5eynlSliPVxc2lb1fq6SlGoul6Ovg1qt4nWsn5RSpQ9baElBaa1tXsr2fXqI+5hxfMfZ5o1f+hrNJHvmU8m2ecr431s1bmxVo9N9r/wA4GiASSk5NyZVGKirIE5kXAWSqy2tchcE95XKtXcu8u2GhaEFwhFdyRRg4KU23uNGJm1Gy3mQAHUIQAAAAAAAAAAAAAAAAAAAAAAAAAAAAADzVlaMnwTfgU5FryhK1Ko/kfjq+5VDnY15xRZhVkzJSruPSuBlr4pOL2r/6ax4q7GR3aRS0tTy6yMc6jZ5B4AZesPK8YPjFPvRRS55KnejSfyJd2r7F2AfSkuwlxKyRtgA6RIAAAAAAAAAAAAAAAAAAAAAAAAAAAAD3GFwDQyvFujOyvsv1JpsrBe2tVipZXwHqp6ubLm9HQQYym30/Erw011TRPFXYz2eKuxkDKzXAB4MAtmb9T2MYvar6uhtteZW8Fh9N69i2/oTMHazWq2w6OBpPOf2JMRP+pOg1sJilLU9UvPqNk6BKAAAAAAAAAAAAAAAAAAAAAAaeLyrRpc+rFP4Vyn3LWQmLzujsp0m/mm7LuX6onq4ujS68lfhq/I2woVJ9VFnNDKOWcPh/fV4U38La0n1QXKfccqzkzpxk6k6fr5QhqtCnyNTSetrlPbvZWG9+97XxJZ8or+i8fYtp8nt9eXh8/B0TLnpKeuGFp2/7qi8Yw/V9he828rRxeHp146nKNpx+Ga1SXf4WOAFz9GGW3RxDoSfs63H8NVbH2rU+zga8PjJOp/I8n5HvEYOCpdBZrz4nYTBicPGpFxktT8HxRnB1Wr5M5RS8bgpUpaMtn4Zbmv16DUq7GXnEYeNSLjJXX+bOBWMr5KdKE5qScErttpaK6b6jmVsLKOcc0XU66krS1IUyYeg5uy7XwMmCwvrFGaktBq8ZJp6S6LErSpqKslZGKOElJ3nkvNmKldRyjmz7SpqKSR6AOqlZWRDcrWfWMcKVKMZOMpVU002mlBXumtmtxMeQfSFKCUMVFzS/bRtpfvR2S61bqZC595QU68YLWqcLdcm+V5LuKvObZJWxtOC6ObLKODqVHd5I7zk3LmHxHua8Jv4L2kuuD5S7iQPzp/iLJm7nRi6dSnBV5Tg3rhU5aslfU5a1s3Mnhyiv7rw9jfU5Pa6j8fc7OCr4TO5bKlJr5oO//i/1JvCZWo1eZVjf4XyX3MrpYujV6slfho/MinQqQ1RugAoNQAAAAAAAK1nLlzRvRpPlbKk1+H5V08eHlpr14UYbcv8AXwNlOnKpLZiZMsZzKm3CklOS1Sm+anwVucyuYvK9apzqsrfCuSu5be00AfNV8bWqvN2XBafv73OvTw9Onos+IABIUFZy/D2zfGMf0+xGk1l1e0X0LzZEulr1bDsRwknRhOGd0ieGLipyhPKx4jG5vZOehUg/mV30PU/MwRjYTnbrLqeFp0oN1d69eHy/Ajq4mdaajT09e/8AeR23NfK3roaE37SC1/NHdLr3P+5PnJclY6UfVVoO0rJ+GtPoOl5JyjGvTU46nsnHfGXA8cnYvnY83PrLzXut/ia8XQ2JbUdH5G+ci9Juc7rVHg6b9lTl7WX/ACVFu+mPi+pHRs48oepoyadpy5MOhva+xX8Diuc1JKpGS2yjyutar93kX08TBYlUd9m+7h4+3ElnSlzLqbrpfPIk8xsvulNYeb9nOXIfwVH/AEt+OvidHOU5sUItzm9bjZR6L3u+vUdLyVivWU03tWqXWt/cJ4qEsTKilmlfv4+5mFGSoqpubNsj8sY71cdFPlSWroXE2cbilTi5P91cWVPG4pvTqSd3Zt9i2EPKOM5qPNwfSfkvd7vEpwlDbe09F5lXylPSqTfzW7tX2I+cLGSFW+3bxPbRs5mnXpLY3JL9M9qrUw9RqWjz/aNYkMgxvWj0KT8GvuacqXAlMgwtU/cf2ObPC1Iwm5ZJJ/fuL3iqbsou7fzP2LAADkm43cJlatS5lWVvhfKXc9nYWPJGc6m1CqlBvUprmt9KfN/zYU8FVDGVqL6Ly4PT9fY0VMPTqarPidTBV82cuXtQqvXspze/5X08H2FoPpqFeFaG3H/Hw+anHq0pU5bLAANxrIXObKjowUYO053SfwxW19e5f2KOTWd1S+Ia+GMV3rS+5CHy/KFV1K7T0WS/PmdnC01GmnxzAAISkAAAgsve8j+X92RxKZe58fo+7Ilzs7H1GCkoYWDk/lzj14udaSivlhUdka7NowVIWNfKFKbtO+XoU4CpFXhv9Sx5v1b0kvhk12bV5k9krKM6E1OPVOO6S4P9Sp5tVbSnDik12avv4FgOBJuFTai7PUunFSumTWc2VFiJ03BvRjDY90pa5eSRz7OWd6qXCC8W390WcqGWp3r1OhpdySOxyQ5VsZKpLWz87L0ObyglTw6guPuzezWny6keMU+52/qLjkjGKnKWlscfFbPuUbN2dq1uMZL7/YtRr5UlKjjucjrZP1X4M4FKphth8X6mxjMVKpLSf7q4Ih8u1dGjL5mort1vwTN8gs5qvu4dcn5L7nLi5TqbUndvM6UYpWSIQzUZPZ4mFK5sRjY7OApzc9pOy39vYS4+cFDZau93Z2nokMg+8f0PzRGueuxKZA95L6H5osxkk8PUS3L2OfQi41YNrXQnAAfKnaAAAPpd81sqOrBwm7zhv+KO59e59hRyYzUq6OJgvijKL7r+aRbgKzp1420eT+d5NiqalTfZn87y9g+g+pOPbtOe5wTviaz+e38KS+xGmxj6mlVqy4zk++TNc+Nqu9ST7X6nfpq0UuxAAGs9AAAEHnA7Si/+v7sg27kvnK+XD6PuyIOkqrlRhDcl5nilS2ZSnvfoZqM9x6krmumbEJXOpg8Qqkebnr6ogxlDYlzkNPRnrAVfV1YSey9n1PU/MtxT6kLljyTitOCTfKjqfStzObj8HKl00uiU0MVGokn1uBvFHxc9Kc5cZyfe2XatPRjKXCLfcrlELuQI51Jdy9SHlWXUXe/Q28kTtWpP50u/V9y5FDpTtKMuEk+53L4eOXoWqQlxTXhn+TPJcrxlHtXmv0Co5Wr6dWbWxPRj1LV53LDlTFaENXOlqj0cWVqNOzv3EODwdSqttaPL56d5fPE06TaethThbrPU5WQbME5X+52a1SOGpqMdd3uQUKcsTU2pab/ZHlsms3pXnL6H5ohSWzaftJflvzicZ1HGE1xVjq1Kalsvg/iLEADnGQAAAb+Q56OIoP8A7Eu/V9zQM2GqaM4S+GcX3NM905bM1Lg16nmavFr5odNsD12g+0tHifPZ8DljPIB8QfRoAAAAAAr2cvvIfR92RABZT6qPa0B7pgFFD6iPFf6b+b0ekSmQPeS/KfmgCrEfRn3HPp9dEzlD3VX8uX8rKSAU8gfTn3r0JeVevHufqfGX2GxdSPgNfL+lP/r8HrkrWf2/JBZwc+H0fdkWAa8N9GPcU1eu+88z2GMAnxXWXcVYXqvv9gSmbfvZflvziAST6rKXoWQAEZrAAAB8lsYAYOkAA+tOEf/Z"
                  }`}
                  alt="Avatar"
                  className="h-full w-full rounded-full"
                />
              </div>
             
              <div>
             
              <div
              ref={scrollRef}
                className={`relative ${
                  item?.sender === "user" ? "ml-3" : "mr-3 "
                } text-sm bg-white py-2 px-4 shadow rounded-xl`}
              >
                <p >{item.message}</p>
              </div>
              <span className={`text-xs text-gray-500 leading-none ${  item?.sender === "user" ? 'ml-5' : 'ml-0'} `}>
              
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
